import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./UI/Cards";
import CardList from "./UI/CardList";
import CardGrid from "./UI/CardGrid";

function TopIdea() {
    return (
        <section>
            <Container>
                <h2 className="mb-3">Top Ideas</h2>
                <Row>
                    <div className="col">
                        <Cards styleClassName="">
                            <CardGrid />
                        </Cards>
                    </div>
                    <div className="col">
                        <Cards styleClassName="">
                            <CardGrid />
                        </Cards>
                    </div>
                    <div className="col">
                        <Cards styleClassName="">
                            <CardGrid />
                        </Cards>
                    </div>
                    <div className="col">
                        <Cards
                            title="Leader Board"
                            subTitle="Rewards"
                            styleClassName=""
                        >
                            <ul className="list-unstyled mb-0">
                                <CardList />
                                <CardList />
                                <CardList />
                            </ul>
                        </Cards>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default TopIdea;
