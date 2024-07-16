// FileName: Tracker.js 

import React, { useEffect, useState } from "react"; 
import styled from "styled-components"; 
import AddTransaction from "./AddTransaction"; 
import OverviewComponent from "./OverviewComponent"; 
import TransactionsContainer from "./TransactionsContainer"; 

const Container = styled.div` 
display: flex; 
flex-direction: column; 
width: 600px; 
max-width: 100%; 
background-color: #fff; 
padding: 30px 20px; 
border: 1px solid #000; 
border-radius: 5px; 
margin: 10px; 
`; 

const Heading = styled.h1` 
font-size: 30px; 
font-weight: bold; 
text-align: center; 
margin-bottom: 20px; 
`; 

const TransactionDetails = styled.div` 
display: flex; 
justify-content: space-between; 
align-items: center; 
gap: 20px; 
margin-bottom: 25px; 
`; 

const THeading = styled.div` 
font-size: 30px; 
font-weight: bold; 
text-align: center; 
margin-bottom: 20px; 
color: #44E610; 
`; 

const ExpenseBox = styled.div` 
flex: 1; 
border: 1px solid #000; 
border-radius: 5px; 
padding: 10px 20px; 
background-color: #fff; 
& span { 
	font-weight: bold; 
	font-size: 25px; 
	display: block; 
	color: ${(props) => (props.isExpense ? "red" : "green")}; 
} 
`; 

const IncomeBox = styled(ExpenseBox)``; 

const Tracker = () => { 
const [toggle, setToggle] = useState(false); 
const [transactions, setTransactions] = useState([]); 
const [expense, setExpense] = useState(0); 
const [income, setIncome] = useState(0); 

const AddTransactions = (payload) => { 
	const transactionArray = [...transactions]; 
	transactionArray.push(payload); 
	setTransactions(transactionArray); 
}; 

const removeTransaction = (id) => { 
	const updatedTransactions = transactions 
								.filter((transaction) => transaction.id !== id); 
	setTransactions(updatedTransactions); 
}; 

const calculateTransactions = () => { 
	let exp = 0; 
	let inc = 0; 

	transactions.map((item) => { 
	item.transType === "expense"
		? (exp = exp + item.amount) 
		: (inc = inc + item.amount); 
	}); 

	setExpense(exp); 
	setIncome(inc); 
}; 

useEffect(() => { 
	calculateTransactions(); 
}, [transactions]); 

return ( 
	<Container> 
		<THeading>GeeksforGeeks</THeading> 
	<Heading>Expense Tracker</Heading> 
	<OverviewComponent 
		toggle={toggle} 
		setToggle={setToggle} 
		expense={expense} 
		income={income} 
	/> 

	{toggle && ( 
		<AddTransaction 
		setToggle={setToggle} 
		AddTransactions={AddTransactions} 
		/> 
	)} 

	<TransactionDetails> 
		<ExpenseBox isExpense> 
		Expense <span>₹{expense}</span> 
		</ExpenseBox> 

		<IncomeBox> 
		Budget <span>₹{income}</span> 
		</IncomeBox> 
	</TransactionDetails> 

	<TransactionsContainer 
		transactions={transactions} 
		removeTransaction={removeTransaction} 
	/> 
	</Container> 
); 
}; 

export default Tracker; 
