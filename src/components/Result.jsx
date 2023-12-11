import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({userInput}) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
      <tr>
        <th className="center">Year</th>
        <th className="center">Investment Value</th>
        <th className="center">Interest (year)</th>
        <th className="center">Total Interest</th>
        <th className="center">Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      {resultData.map(data => {
        //Доход в текущем году
        const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
        //Всего инвестировано
        const totalAmountInvested = data.valueEndOfYear - totalInterest;
        return (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>);
      })}
      </tbody>
    </table>
  );
}