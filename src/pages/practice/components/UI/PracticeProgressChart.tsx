import { CChart } from "@coreui/react-chartjs";

function PracticeProgressChart() {
  return (
    <div>
      <CChart
        options={{}}
        type="line"
        data={{
          labels: ["January", "February"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: [40, 20, 12],
            },
          ],
        }}
      />
    </div>
  );
}

export default PracticeProgressChart;
