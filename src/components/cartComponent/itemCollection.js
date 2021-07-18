import React from 'react';
import Item from './item';
import Data from '../../data';
import { useEffect, useState } from 'react';

const ItemCollection = (  ) => {

    return (
        <section >
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ">
                        <span className="subheading">Featured Products</span>
                        <h2 className="mb-4">Our Products</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>   		
            </div>
            
            <div className="container">
                <div className="row"> 
                    {
                        Data.productData.map((item,index)=>{
                            return <Item items={item}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default ItemCollection;