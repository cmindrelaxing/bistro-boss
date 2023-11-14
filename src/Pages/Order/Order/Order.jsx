import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    // console.log(category);


    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu?.filter(item => item.category === "dessert");
    const soups = menu?.filter(item => item.category === "soup");
    const pizza = menu?.filter(item => item.category === "pizza");
    const salad = menu?.filter(item => item.category === "salad");
    const drinks = menu?.filter(item => item.category === "drinks");

    return (
        <div className="text-center">
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={orderCover} title="Order Food"></Cover>
            <div className="mt-10 capitalize">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className="">
            <TabList>
                <Tab>Salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soups</Tab>
                <Tab>desserts</Tab>
                <Tab>drinks</Tab>
            </TabList>
            </div>
            <TabPanel>
                <OrderTab items={salad}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={soups}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={desserts}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;