import React from 'react';
import axios from 'axios';
import Card from '../card/Card';
import './Page.css';
function Page(props) {
    let [data,setData]=React.useState([]);
    let url="https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
    axios.get(url)
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err);
    });
    return (
        <div className="page-wrapper">
           { data.map((e,i)=>{
            return <Card title={e.title} key={i} image={e.thumbnail.small} content={e.content.substr(0,130)} name={e.author.name} 
            
            avatar={e.author.avatar} role={e.author.role}  date={e.date} imageL={e.thumbnail.large} />
               })
           } 
        </div>
    );
}

export default Page;