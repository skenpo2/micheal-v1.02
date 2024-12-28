const Tag = ({ tool }) => {
  return (
    <div className="tool">
      <span className={`tag ${tool}`}>{tool}</span>
    </div>
  );
};
export default Tag;
