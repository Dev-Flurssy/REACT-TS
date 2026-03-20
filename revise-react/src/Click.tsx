const Click = () => {
  const companies: string[] = ["Walmart", "Apple", "Marco", "DJango"];
  const handleClick = (company: string) => {
    alert(`You clicked ${company}`);
  };
  return (
    <div>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            <button onClick={() => handleClick(company)}>{company}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Click;
