// src/firebase/firestoreService.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc 
} from 'firebase/firestore';
import { db } from './config';

// Collection names
const COLLECTIONS = {
  REGISTRATIONS: 'registrations',
  CONTACTS: 'contacts',
  STAFF: 'staff',
  RESULTS: 'results'
};

// Registration Services
export const registrationService = {
  // Create new registration
  async createRegistration(registrationData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTIONS.REGISTRATIONS), {
        ...registrationData,
        createdAt: new Date().toISOString(),
        status: 'pending',
        updatedAt: new Date().toISOString()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error creating registration:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all registrations
  async getAllRegistrations() {
    try {
      const q = query(collection(db, COLLECTIONS.REGISTRATIONS), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching registrations:', error);
      return [];
    }
  },

  // Get registrations by type
  async getRegistrationsByType(type) {
    try {
      const q = query(
        collection(db, COLLECTIONS.REGISTRATIONS), 
        where('registrationType', '==', type),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching registrations by type:', error);
      return [];
    }
  },

  // Update registration status
  async updateRegistrationStatus(registrationId, status) {
    try {
      const registrationRef = doc(db, COLLECTIONS.REGISTRATIONS, registrationId);
      await updateDoc(registrationRef, {
        status: status,
        updatedAt: new Date().toISOString()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating registration:', error);
      return { success: false, error: error.message };
    }
  }
};

// Contact Services
export const contactService = {
  async createContact(contactData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTIONS.CONTACTS), {
        ...contactData,
        createdAt: new Date().toISOString(),
        status: 'unread',
        updatedAt: new Date().toISOString()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error creating contact:', error);
      return { success: false, error: error.message };
    }
  },

  async getAllContacts() {
    try {
      const q = query(collection(db, COLLECTIONS.CONTACTS), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return [];
    }
  },

  async markContactAsRead(contactId) {
    try {
      const contactRef = doc(db, COLLECTIONS.CONTACTS, contactId);
      await updateDoc(contactRef, {
        status: 'read',
        updatedAt: new Date().toISOString()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating contact:', error);
      return { success: false, error: error.message };
    }
  }
};

// Staff Services
export const staffService = {
  async getAllStaff() {
    try {
      const q = query(collection(db, COLLECTIONS.STAFF), orderBy('name'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching staff:', error);
      return [];
    }
  },

  async getStaffByDepartment(department) {
    try {
      const q = query(
        collection(db, COLLECTIONS.STAFF), 
        where('department', '==', department),
        orderBy('name')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching staff by department:', error);
      return [];
    }
  }
};

// Results Services
export const resultsService = {
  async getAllResults() {
    try {
      const q = query(collection(db, COLLECTIONS.RESULTS), orderBy('year', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching results:', error);
      return [];
    }
  },

  async getResultsByYear(year) {
    try {
      const q = query(
        collection(db, COLLECTIONS.RESULTS), 
        where('year', '==', year),
        orderBy('percentage', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching results by year:', error);
      return [];
    }
  },

  async getResultsBySubject(subject) {
    try {
      const q = query(
        collection(db, COLLECTIONS.RESULTS), 
        where('subject', '==', subject),
        orderBy('percentage', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching results by subject:', error);
      return [];
    }
  }
};

// Analytics Service
export const analyticsService = {
  async getRegistrationStats() {
    try {
      const [matricRegs, itRegs, contacts] = await Promise.all([
        registrationService.getRegistrationsByType('matric'),
        registrationService.getRegistrationsByType('it'),
        contactService.getAllContacts()
      ]);

      return {
        totalMatricRegistrations: matricRegs.length,
        totalITRegistrations: itRegs.length,
        totalContacts: contacts.length,
        pendingMatric: matricRegs.filter(reg => reg.status === 'pending').length,
        pendingIT: itRegs.filter(reg => reg.status === 'pending').length,
        unreadContacts: contacts.filter(contact => contact.status === 'unread').length
      };
    } catch (error) {
      console.error('Error fetching analytics:', error);
      return null;
    }
  }
};