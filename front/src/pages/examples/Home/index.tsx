import React, { useState, useEffect } from 'react';
import './styles';

interface HomeTypes{
  props?: any
}

const url = "http://localhost:3333/products";
// const url = "https://randomuser.me/api/";

//  https://randomuser.me/api/
// key={products.results[0].id}

function Home(props:HomeTypes) {
  const [products, setProducts] = useState<any>([]);

  //1 - resgatando dados
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };

    getData();
  }, []);

  return (
    <section className="Home">
      <h1>Início</h1>
      <p>Seja bem vindo, User</p>
      <p>Meu perfil</p>
      {/* <ul>
        {
          products.map((product: any) => (
            <li key={product.id}>{product.name}</li>
          ))
        }
      </ul> */}
    </section>
  )
}

export default Home