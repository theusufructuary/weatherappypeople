export default function Card({ date, tempMax, tempMin, desc }) {
  const newDate = new Date(date * 1000);
  const realDate = newDate.toLocaleDateString();
  console.log(date, "is the date");

  return (
    <div>
      <h3>{realDate}</h3>
      <p>Maximum temperature of {tempMax.toFixed(0) - 273} degrees celsius</p>
      <p> Minimum temperatire of {tempMin.toFixed(0) - 273} degrees celsius</p>
      <p>The forecast is {desc}</p>
    </div>
  );
}
