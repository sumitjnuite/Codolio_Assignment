import React, { useState } from "react";
import PopupModal from "../Components/PopupModal";
import PieChart from "../Components/PieChart";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { TransactionData } from "../TransactionData.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Home = () => {
  let IncomeAmout = 0;
  let ExpenseAmount = 0;
  let BonusCnt = 0,
    EducationCnt = 0,
    EntertainmentCnt = 0,
    FoodCnt = 0,
    FreelanceCnt = 0,
    GiftCnt = 0,
    HealthcareCnt = 0,
    InvestmentCnt = 0,
    RentCnt = 0,
    SalaryCnt = 0,
    ShoppingCnt = 0,
    TransportationCnt = 0,
    TravelCnt = 0,
    UtilitiesCnt = 0;
  TransactionData?.forEach((Tdata) => {
    if (Tdata.type === "Income") {
      IncomeAmout += Tdata?.amount;
    } else if (Tdata.type === "Expense") {
      ExpenseAmount += Tdata?.amount;
    }

    if (Tdata.category === "Bonus") {
      BonusCnt += 1;
    } else if (Tdata.category === "Education") {
      EducationCnt += 1;
    } else if (Tdata.category === "Entertainment") {
      EntertainmentCnt += 1;
    } else if (Tdata.category === "Food") {
      FoodCnt += 1;
    } else if (Tdata.category === "Freelance") {
      FreelanceCnt += 1;
    } else if (Tdata.category === "Gift") {
      GiftCnt += 1;
    } else if (Tdata.category === "Healthcare") {
      HealthcareCnt += 1;
    } else if (Tdata.category === "Investment") {
      InvestmentCnt += 1;
    } else if (Tdata.category === "Rent") {
      RentCnt += 1;
    } else if (Tdata.category === "Salary") {
      SalaryCnt += 1;
    } else if (Tdata.category === "Shopping") {
      ShoppingCnt += 1;
    } else if (Tdata.category === "Transportation") {
      TransportationCnt += 1;
    } else if (Tdata.category === "Travel") {
      TravelCnt += 1;
    } else if (Tdata.category === "Utilities") {
      UtilitiesCnt += 1;
    }
  });

  const [typeData, setTypeData] = useState({
    labels: ["Bonus", "Salary"],
    datasets: [
      {
        label: "Category",
        data: [BonusCnt, SalaryCnt],
        backgroundColor: ["rgba(187, 247, 208,1)", "rgb(255, 99, 132)"],
      },
    ],
  });

  const [categoryData, setCategoryData] = useState({
    labels: [
      "Education",
      "Entertainment",
      "Food",
      "Freelance",
      "Gift",
      "Healthcare",
      "Investment",
      "Rent",
      "Shopping",
      "Transportation",
      "Travel",
      "Utilities",
    ],
    datasets: [
      {
        label: "Transaction Category",
        data: [
          EducationCnt,
          EntertainmentCnt,
          FoodCnt,
          FreelanceCnt,
          GiftCnt,
          HealthcareCnt,
          InvestmentCnt,
          RentCnt,
          ShoppingCnt,
          TransportationCnt,
          TravelCnt,
          UtilitiesCnt,
        ],
        backgroundColor: [
          "#d5f30e",
          "#53d726",
          "#1aab2e",
          "#7ddddd",
          "#5fb7d4",
          "#007ed7",
          "#8399eb",
          "#8e6cef",
          "#c759d0",
          "#ff0000",
          "#ff7300",
          "#ffec01",
        ],
      },
    ],
  });

  // const data = {
  //     labels: [
  //       'Expense',
  //       'Income',
  //     //   'Yellow'
  //     ],
  //     datasets: [{
  //       label: 'My First Dataset',
  //       data: [300, 50],
  //       backgroundColor: [
  //         'rgb(255, 99, 132)',
  //         'rgba(187, 247, 208,1)',
  //         // 'rgb(255, 205, 86)'
  //       ],
  //       hoverOffset: 4
  //     }]
  //   };

  // const config = {
  //     type: 'pie',
  //     data: {data},
  //     options: {},
  //     plugins: []
  //   }




  return (
    <main className="max-w-7xl mx-auto dark:bg-dark dark:text-white min-h-[98vh] flex flex-col gap-4 md:gap-4 sm:px-12  py-12 relative ">
      {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg"> */}

      {/* </div> */}

      <div className=" bg-blue-100 ">
        <input
          type="month"
          id="start"
          name="start"
          min="2020-08"
          value="2020-10"
          className="w-full"
        />
      </div>

      {/* Chart */}
      <div className="">
        <div className="flex flex-col lg:flex-row  w-full">
          <div className="flex-1">
            <PieChart chartData={typeData} />
          </div>
          <div className="flex-1">
            <PieChart chartData={categoryData} />
          </div>

          {/* <Pie
            width={300}
            height={200}
        data={data}/>

        <Pie
            width={300}
            height={200}
        data={data}/> */}
        </div>

        <div className="flex gap-16 my-2">
          <div className="flex-1 flex justify-center gap-8 bg-green-200 font-bold text-lg text-green-600 rounded-sm py-2">
            <span>INCOME:</span>
            <span>$ 36,860</span>
          </div>
          <div className="flex-1 flex justify-center gap-8 bg-red-200 font-bold text-lg text-red-600 rounded-sm py-2">
            <span>EXPENCE:</span>
            <span>$ 12,860</span>
          </div>
        </div>
      </div>

      {/* filter div */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search by title"
          className="w-[50%] px-4 py-2 outline-none rounded-md"
        />

        <div className="flex-1 flex gap-4">
          <select name="Type" id="" className="flex-1 px-2 rounded-md">
            <option value="">Type</option>
            <option value="">Income</option>
            <option value="">Expence</option>
          </select>

          <select name="" id="" className="flex-1 px-2 rounded-md">
            <option value="">Category</option>
            <option value="">Bonus</option>
            <option value="">Education</option>
            <option value="">Entertainment</option>
            <option value="">Food</option>
            <option value="">Freelance</option>
            <option value="">Gift</option>
            <option value="">Healthcare</option>
            <option value="">Investment</option>
            <option value="">Rent</option>
            <option value="">Salary</option>
            <option value="">Shopping</option>
            <option value="">Transportation</option>
            <option value="">Travel</option>
            <option value="">Utilities</option>
          </select>

          <select name="" id="" className="flex-1 px-2 rounded-md">
            <option value="">Currency</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
            <option value="">INR</option>
            <option value="">JPY</option>
            <option value="">USD</option>
          </select>
        </div>
      </div>

      {/* listings */}
      <div className="bg-white rounded-lg">
        <div className="flex justify-between border-b-2 py-4 px-8">
          <div className="flex gap-2">
            <h3 className="font-semibold">10</h3>
            <h3 className="font-semibold bg-slate-200 px-4 rounded-lg">WED</h3>
          </div>
          <div className="flex gap-4">
            <h3 className="font-bold text-green-600">0</h3>
            <h3 className="font-bold text-red-600">13145</h3>
          </div>
        </div>

        <div className="py-2">
          <div className="flex gap-4 px-8 py-1">
            <span className="min-w-fit bg-green-300 px-4  text-center rounded-lg ">
              Food
            </span>
            <span className=" font-bold">Lunch With Friends</span>
            <h3 className="flex gap-8 font-bold" style={{ marginLeft: "auto" }}>
              1285 <span>Del</span>
            </h3>
          </div>
          <div className="flex gap-4 px-8 py-1">
            <span className="min-w-fit bg-green-300 px-4  text-center rounded-lg ">
              Food
            </span>
            <span className=" font-bold">Lunch With Friends</span>
            <h3 className="flex gap-8 font-bold" style={{ marginLeft: "auto" }}>
              1285 <span>Del</span>
            </h3>
          </div>
        </div>
      </div>
      {/* <button className="grid place-items-center fixed right-8 bottom-8 rounded-full bg-pink-400 w-16 h-16 text-white text-3xl">
        +
      </button> */}
      {/* popup window on clicking + button */}
      <PopupModal />
    </main>
  );
};

export default Home;
