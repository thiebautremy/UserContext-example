const ForEachTest = () => {
  const peoples = [
    { id: 0, name: "bouh" },
    { id: 1, name: "Jack" },
    { id: 2, name: "Marlon" },
    { id: 3, name: "Pedro" },
  ];

  peoples.forEach((people, index) => {
    console.log("Current people is :" + people.name);
    if (index !== peoples.length - 1) {
      console.log("Next people is: " + peoples[index + 1].name);
    }
    if (index > 0) {
      console.log("Previous people is: " + peoples[index - 1].name);
    }
  });
  return (
    <>
      <h1>For Each</h1>
    </>
  );
};

export default ForEachTest;
