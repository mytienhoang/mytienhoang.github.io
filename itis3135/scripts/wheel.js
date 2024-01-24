const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16];

// Background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];

// Create chart
let myChart = new Chart(wheel, {
  // Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  // Chart Type Pie
  type: "pie",
  data: {
    // Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4, 5, 6],
    // Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    // Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      // Hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      // Display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

// Display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i = 0; i < rotationValues.length; i++) {
    if (angleValue >= rotationValues[i].minDegree && angleValue <= rotationValues[i].maxDegree) {
      const selectedValue = rotationValues[i].value;
      finalValue.innerHTML = `<p>Value: ${selectedValue}</p>`;

      // Call showDialog here to display the dialog with the selected value
      showDialog(selectedValue); // Added line to show the dialog

      // Remove the selected value from the data
      rotationValues.splice(i, 1);
      data.splice(i, 1);
      pieColors.splice(i, 1);
      updateWheelData(); // Function to update the wheel with new data

      spinBtn.disabled = false;
      break;
    }
  }
};

// Update the wheel
const updateWheelData = () => {
  myChart.data.labels = rotationValues.map(val => val.value);
  myChart.data.datasets[0].data = data;
  myChart.data.datasets[0].backgroundColor = pieColors;
  myChart.update();
};

let count = 0;
let resultValue = 101;

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  let segmentSize = 360 / data.length;
  let randomDegree = Math.floor(Math.random() * (segmentSize * data.length - 0 + 1)) + 0;

  let rotationInterval = window.setInterval(() => {
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();

    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

// Dialog box functions
function showDialog(winnerValue) {
  var dialogContent = document.getElementById('dialogContent');
  dialogContent.innerHTML = `Winner: ${winnerValue}`;
  document.getElementById('modal-body').style.display = 'block';
}

function closeDialog() {
  document.getElementById('winnerModal').style.display = 'none';
}
