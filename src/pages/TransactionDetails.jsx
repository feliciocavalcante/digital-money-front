import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import FormTransaction from "../components/FormTransaction/FormTransaction";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";

export default function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const notify = () => toast('Wow so easy !');

  const [transactionType, setTransactionType] = useState("");

  function handleChangeTitle(ev) {
    setTitle(ev);
  }

  function handleClickTransactionType(type) {
    setTransactionType(type);
  }

  function handleChangeCategory(ev) {
    setCategory(ev);
  }

  function handleChangePrice(ev) {
    setPrice(ev);
  }

  async function fetchTransactionId() {
    const transaction = await axios.get(`${API_BASE_URL}/transactions/${id}`);

    setTitle(transaction.data.title);
    setPrice(transaction.data.price);
    setCategory(transaction.data.category);
    setTransactionType(transaction.data.transactionType);
  }

  useEffect(() => {
    fetchTransactionId();
  }, []);

  async function handleUpdateTransaction() {
    try {
      await axios.put(`${API_BASE_URL}/transactions/${id}`, {
        title,
        price: Number(price),
        category,
        transactionType,
        date: format(new Date(), "dd/MM/yyyy"),
      });

      notify();
      navigate("/transactions");
    } catch (error) {
      console.error("Erro ao atualizar transação:", error);
    }
  }

  console.log(id);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-8 bg-white -mt-24 rounded-lg shadow-lg">
        <FormTransaction
            titleValue={title}
            priceValue={price}
            categoryValue={category}
            handleChangeTitle={handleChangeTitle}
            handleChangePrice={handleChangePrice}
            handleChangeCategory={handleChangeCategory}
            handleClickTransactionType={handleClickTransactionType}
            transactionType={transactionType}
            handleNewTransaction={handleUpdateTransaction}

            buttonText="Atualizar"
            formTitle="Atualizar transação"
        />
      </main>
      <ToastContainer />
    </div>
  );
}
