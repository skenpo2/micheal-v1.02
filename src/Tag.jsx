const Tag = ({ tool }) => {
  return (
    <div className="tool">
      <span className={`tag ${tool}`}></span>
      <p>{tool}</p>
    </div>
  );
};
export default Tag;
