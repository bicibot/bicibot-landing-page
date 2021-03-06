import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Counter from "../../components/Counter"
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { ResponsiveCalendar } from '@nivo/calendar'
import { ResponsiveBar } from '@nivo/bar'


const StatisticsBuilder = (props) => {

    const vehiData = [];

    const vehicles = new Set(props.data.map(report => report.invasion_vehicle))

    const calendarData = props.data.reduce((days, r) => {
      let createdAt = new Date(r.createdAt).toISOString().split('T')[0];
      if (!days.some(d => d.day === createdAt)) {
        days.push({ day: createdAt, value: 0 })
      }

      let dayToBeUpdated = days.filter(d => d.day === createdAt);
      dayToBeUpdated[0].value += 1;

      return days;
    }, [])

    const timeData = props.data.reduce((hours, r) => {
      let reportHour = new Date(r.createdAt).getHours().toString() + 'h';
      if (!hours.some(h => h.hour === reportHour)) {
        hours.push({ hour: reportHour, 'denúncias': 0 })
      }

      let hourToBeUpdated = hours.filter(h => h.hour === reportHour);
      hourToBeUpdated[0]['denúncias'] += 1;

      return hours;
    }, [])

    timeData.sort((h, h2) => h.hour.split('h')[0] - h2.hour.split('h')[0])

    vehicles.forEach(v => {
      if (v !== undefined) {
        vehiData.push({ name: v, quantity: props.data.filter(r => r.invasion_vehicle === v).length })
      }
    })

    return (
        <Row className="justify-content-md-center" style={{marginTop: "50px"}}>
            <Col lg="2" style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <Card style={{height:"fit-content"}}>
                <Counter total={props.data.length} />
                </Card>
            </Col>
            <Col lg="6" style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={vehiData}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                        layout="vertical"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar name="Tipo de veículo invasores" dataKey="quantity" fill="#5A31F8" />
                    </BarChart>
                </ResponsiveContainer>
            </Col>
            <Col lg="6" className="mr-10" style={{ height: "400px", width: "100%" }}>
                <ResponsiveCalendar
                    data={calendarData}
                    from="2019-09-24"
                    to="2020-01-20"
                    emptyColor="#eeeeee"
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    minValue="auto"
                    yearSpacing={40}
                    monthBorderColor="#ffffff"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    tooltip={({ day, value, color }) => (
                        <strong style={{ color }}>
                            {new Date(day).toLocaleDateString("pt-BR")}: {value}
                        </strong>
                    )}
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]} />
            </Col>
            <Col lg="6" className="mr-10" style={{ height: "400px", width: "100%" }}>
                <ResponsiveBar
                    data={timeData}
                    keys={['denúncias']}
                    indexBy="hour"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    axisTop={null}
                    axisRight={null}
                    colors={['#5a30f8', '#97e3d5', '#e8c1a0', '#f47560']}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Faixa de Horário',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Número de Denúncias',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={"#fff"}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    tooltip={({ id, value, color }) => (
                        <strong style={{ color }}>
                            Número de Denúncias: {value}
                        </strong>
                    )}
                />
            </Col>
        </Row>
    )
}

export default StatisticsBuilder