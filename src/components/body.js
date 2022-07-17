import React from "react";
import Banner from "./banner";
import Item from "./item";

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <section className="pt-4">
                    <div className="container px-lg-5">
                        <Item />
                    </div>
                </section>
            </div>
        );
    }
}
