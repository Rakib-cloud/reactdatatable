import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import { copyToClipboard } from 'react-copy-to-clipboard';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './DataTable.css';
const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Age',
        selector: 'age',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
];

const data = [
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
];

function MyDataTable() {


    //serach filter work
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredData = data.filter((row) =>
        Object.values(row).some(
            (value) => typeof value === 'string' && value.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    //pdf work
    const styles = StyleSheet.create({
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#bfbfbf",
            marginTop: 10,
            marginBottom: 10,
        },
        tableRow: {
            margin: "auto",
            flexDirection: "row",
        },
        tableColHeader: {
            width: "25%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#bfbfbf",
            backgroundColor: "#f3f3f3",
            textAlign: "center",
            fontWeight: "bold",
        },
        tableCol: {
            width: "25%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#bfbfbf",
            textAlign: "center",
        },
    });

    function PdfDocument({ data }) {
        return (
            <Document>
                <Page>
                    <View>
                        <Text>Table Data</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableColHeader}>
                                    <Text>Name</Text>
                                </View>
                                <View style={styles.tableColHeader}>
                                    <Text>Age</Text>
                                </View>
                                <View style={styles.tableColHeader}>
                                    <Text>Email</Text>
                                </View>
                                <View style={styles.tableColHeader}>
                                    <Text>Country</Text>
                                </View>
                            </View>
                            {data.map((row, index) => (
                                <View style={styles.tableRow} key={index}>
                                    <View style={styles.tableCol}>
                                        <Text>{row.name}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text>{row.age}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text>{row.email}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text>{row.country}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </Page>
            </Document>
        );
    }


    //copy work

    const handleCopy = ({data}) => {
        const table = data.map((row) => Object.values(row).join("\t")).join("\n");
        copyToClipboard(table);
    };

//print work
    const handlePrint = () => {
        window.print();
    };


    return (
        <div className="border-2 ml-2 mr-3 mt-4">
            <div className="flex gap-96 justify-evenly mt-7 shadow-2xl">

                <div className="ml-8  flex gap-4">
                    <CSVLink data={data} filename="table-data.csv" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">CSV</CSVLink>
                    <PDFDownloadLink document={<PdfDocument data={data} />} fileName="table-data.pdf" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'PDF'
                        }
                    </PDFDownloadLink>

                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleCopy}>Copy</button>

                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handlePrint}>Print</button>

                </div>
               <div className="w-1/2 search_div ">
                   <input type="text"  className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={searchText} onChange={handleSearch} placeholder="Search..." />
               </div>
            </div>
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20]}
                defaultSortField="name"
                defaultSortAsc={true}
            />
        </div>
    );
}

export default MyDataTable;
