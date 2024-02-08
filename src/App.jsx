

import './App.scss'
import personIcon from '../public/images/icon-person.svg'
import dollarIcon from '../public/images/icon-dollar.svg'
import { useState, useEffect } from 'react';

function App() {

  const [bill, setBill] = useState(undefined);
  const [people, setPeople] = useState(undefined);
  const [tip, setTip] = useState(undefined);
  const [billStatus, setBillStatus] = useState(false);
  const [peopleStatus, setPeopleStatus] = useState(false);

  const [customTip, setCustomTip] = useState('hidden');
  const [isClicked, setClicked] = useState(false);
  const [activeTip, setActiveTip] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [splitAmount, setSplitAmount] = useState(0);

  const resetHandler = () => {
    window.location.reload();
  }

  const customTipHandler = () => {
    setClicked(true);
    setCustomTip('flex')
    setActiveTip('');
  }

  const billHandler = (e) => {
    setBill(e.target.value)
    // calculation()
  }

  const tipHandler = (event, tipPercentage) => {

    setClicked(false);
    setCustomTip('hidden')
    setActiveTip(tipPercentage)
    setTip(tipPercentage)
    // calculation()
  }

  const peopleHandler = (e) => {

    setPeople(e.target.value)
    // calculation()
  };

  const customTipUpdate = (e) => {
    setTip(e.target.value)
    // calculation()

  };
  useEffect(() => {
    calculation();
  }, [bill, tip, people]);

  function calculation() {
    console.clear();
    console.log('bill' + bill)
    console.log('tip' + tip)
    console.log('people' + people)

    if (bill <= 0) {
      setBillStatus(true);
    }
    else {
      setBillStatus(false);
    }

    if (people <= 0) {
      setPeopleStatus(true);
    }
    else {
      setPeopleStatus(false);
    }



    if (bill > 0 && people > 0 && tip >= 0) {
      setTipAmount(((bill * tip) / 100) / people)
      setSplitAmount(bill / people)
    }



  }

  return (
    <>
      <div className="mainWrapper flex flex-col items-center gap-3 justify-center bg-Lightgrayishcyan min-h-screen w-screen">
        <h1 className='text-2xl tracking-[10px] md:mb-[150px] mb-[50px] font-bold font-spaceMono text-Darkgrayishcyan text-center'>SPLI<br />TTER</h1>
        <div className="flex flex-col md:flex-row splitterWrapper md:min-h-[550px] min-h-[800px] min-w-[375px]  rounded-t-[35px] md:rounded-[35px] bg-White lg:w-[1000px]">
          <div className="calculation p-7 items-center gap-11 justify-center flex flex-col md:w-[50%]">
            <div className="bill ">
              <label htmlFor="bill" className='font-spaceMono relative gap-5 flex flex-col text-Darkgrayishcyan text-2xl md:text-4xl '>
                Bill
                <input onChange={billHandler} inputMode="numeric" min="0" type="number" name="bill" id="bill" className={`input ${billStatus ? 'wrong' : ''}`} placeholder='0' />
                <span className={`absolute right-0 top-4 text-red text-[15px] ${billStatus ? '' : 'hidden'}`}>Can't be zero</span>
                <img src={dollarIcon} alt="person" className='absolute top-[67%]  min-h-[20px] left-4' />
              </label>
            </div>

            <div className="tips w-full flex items-center justify-center flex-wrap gap-4 ">
              <p className='w-full font-spaceMono text-2xl text-Darkgrayishcyan'>Select Tips %</p>
              <div className="tipsWrapper flex items-center justify-center flex-wrap gap-4">

                {

                  [5, 10, 15, 25, 50].map((tipPercentage, index) => (

                    <p onClick={(event) => tipHandler(event, tipPercentage)} key={index} className={`tip ${activeTip === tipPercentage ? 'active' : ''}`}>{tipPercentage}%</p>
                  ))
                }


                <p className={isClicked ? 'hidden' : 'tip tipCustme'} onClick={customTipHandler}>Custom</p>
                <input type="number" inputMode="numeric" min="0" onChange={customTipUpdate} className={isClicked ? 'tip tipCustme text-right px-5 focus:outline-2 outline-activeColor' : customTip} />

              </div>

            </div>
            <div className="w-full NoOfPeoples">
              <label htmlFor="noOfPeople" className='labelText relative flex flex-col items-start gap-5'>
                No Of Peoples
                <img src={personIcon} alt="person" className='absolute top-[67%]  min-h-[20px] left-4' />
                <input type="number" inputMode="numeric" min="0" onChange={peopleHandler} className={`input text-4xl ${peopleStatus ? 'wrong' : ''} `} name="noOfPeople" placeholder='0' id="noOfPeople" />
                <span className={`absolute right-0 top-4 text-red text-[15px] ${peopleStatus ? '' : 'hidden'}`}>Can't be zero</span>
              </label>
            </div>
          </div>

          <div className="showResult flex items-center justify-center  p-[20px] min-w-[50%] min-h-full">
            <div className="flex flex-col p-2 items-center justify-evenly result w-[100%] h-[250px] md:h-[500px] rounded-xl bg-Verydarkcyan ">
              <div className="amoutWrapper flex flex-col w-full">
                <div className="tipAmount flex w-full justify-between items-center p-5 md:p-10">

                  <div className="tipAmountLabel">
                    <p className='text-White text-[20px] font-bold font-spaceMono'>Tip Amount</p>
                    <p className='text-StrongCyan font-spaceMono font-bold'>/Person</p>
                  </div>
                  <div className="tipAmountShow">
                    <p className='text-StrongCyan font-spaceMono text-[30px] font-bold'>${tipAmount.toFixed(2)}</p>
                  </div>
                </div>

                <div className="totalPerson flex w-full justify-between items-center p-5 md:p-10">
                  <div className="totalPersonLabel">
                    <p className='text-White text-[20px] font-bold font-spaceMono'>Total Person</p>
                    <p className='text-StrongCyan font-spaceMono font-bold'>/Person</p>
                  </div>
                  <div className="totalPersonShow ">
                    <p className='text-StrongCyan font-spaceMono text-[30px] font-bold'>${splitAmount.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="buttonWrapper w-full flex items-center justify-center">
                <button onClick={resetHandler} className='uppercase transition duration-200 ease-in-out bg-StrongCyan h-[50px] w-[85%] hover:bg-activeColor rounded-lg text-Verydarkcyan text-[20px] font-bold '>reset</button>
              </div>



            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
