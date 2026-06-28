const StructuredData = ({ schema }) => (
  <script type="application/ld+json">{JSON.stringify(schema)}</script>
);

export default StructuredData;