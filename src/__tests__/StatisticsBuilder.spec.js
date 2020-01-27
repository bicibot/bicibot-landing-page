import React from "react";
import { create } from "react-test-renderer";
import StatisticsBuilder from "../components/StatisticsBuilder"

let data = [
    {
        "_id": "5d88bda107bad80023d00c21",
        "report_type": "Ameaça",
        "location": [
            -34.888514,
            -8.0444708
        ],
        "city": "Recife",
        "description": "Passou perto/rápido",
        "invasion_vehicle": "Ônibus",
        "invasion_time": "06h01 ao 12h00",
        "invasion_state": "Veiculo trafegando na ciclofaixa",
        "address": "avenida agamenon magalhães, 17, santo amaro",
        "createdAt": "2019-09-23T12:42:09.455Z",
        "updatedAt": "2019-09-23T12:42:09.455Z",
        "__v": 0
    }
]

describe("Counter component", () => {
    test("Matches the snapshot", () => {
        const statisticsBuilder = create(<StatisticsBuilder data={data} />);
        expect(statisticsBuilder.toJSON()).toMatchSnapshot();
    });
});