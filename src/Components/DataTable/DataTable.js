import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import { copyToClipboard } from 'react-copy-to-clipboard';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import XLSX from 'xlsx';
import downloadCsv from 'download-csv';
import { useMemo } from 'react';
import copy from 'copy-to-clipboard';
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
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
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

  

//print work
    const handlePrint = () => {
        window.print();
    };

//excle

function generateCSVData(data) {
    const csvData = data.map(item => [item.id, item.name, item.email]); // Replace with the fields in your table
    csvData.unshift(['ID', 'Name', 'Email']); // Add the header row
    return csvData;
  }

  const csvData = generateCSVData(data);



    //custom style for table

    const customStyles = {
        table: {
            style: {
                color: 'red',
                 backgroundColor: 'green',
            },
        },
        tableWrapper: {
            style: {
                display: 'table',
            },
        },
        responsiveWrapper: {
            style: {},
        },
        header: {
            style: {
                fontSize: '24px',
                color: 'black',
                backgroundColor: 'white',
                // minHeight: '56px',
                // paddingLeft: '16px',
                // paddingRight: '8px',
                textAlign:'center',
            },
        },
        // subHeader: {
        //     style: {
        //         backgroundColor: 'green',
        //         minHeight: '52px',
        //     },
        // },
        head: {
            style: {
                color: 'gray',
                fontSize: '14px',
                fontWeight: 900,
            },
        },
        headRow: {
            style: {
                backgroundColor: 'lightgray',
                minHeight: '52px',
                borderBottomWidth: '1px',
                color: 'black',
               // borderBottomStyle: 'solid',
            },
            // denseStyle: {
            //     minHeight: '32px',
            // },
        },
        headCells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',

            },
            draggingStyle: {
                cursor: 'move',
            },
        },
        // contextMenu: {
        //     style: {
        //         backgroundColor: 'green',
        //         fontSize: '18px',
        //         fontWeight: 400,
        //         color: 'red',
        //         paddingLeft: '16px',
        //         paddingRight: '8px',
        //         transform: 'translate3d(0, -100%, 0)',
        //         transitionDuration: '125ms',
        //         transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        //         willChange: 'transform',
        //     },
        //     activeStyle: {
        //         transform: 'translate3d(0, 0, 0)',
        //     },
        // },
        // cells: {
        //     style: {
        //         paddingLeft: '16px',
        //         paddingRight: '16px',
        //         wordBreak: 'break-word',
        //         backgroundColor:'Lightgray',
        //         // marginTop: '12px',
        //     },
        //     draggingStyle: {},
        // },
        rows: {
            style: {
                fontSize: '13px',
                fontWeight: 600,
                color: 'black',
                // backgroundColor: 'green',
                // minHeight: '48px',
                '&:not(:last-of-type)': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: 'gray',
                },
            },
            denseStyle: {
                // minHeight: '32px',
            },
            // selectedHighlightStyle: {
            //     // use nth-of-type(n) to override other nth selectors
            //     '&:nth-of-type(n)': {
            //         color: 'red',
            //         backgroundColor: 'green',
            //         borderBottomColor: 'blue',
            //     },
            // },
            // highlightOnHoverStyle: {
            //     color: 'green',
            //     backgroundColor: 'red',
            //     transitionDuration: '0.15s',
            //     transitionProperty: 'background-color',
            //     borderBottomColor: 'green',
            //     outlineStyle: 'solid',
            //     outlineWidth: '1px',
            //     outlineColor: 'red',
            // },
            // stripedStyle: {
            //     color: 'black',
            //     backgroundColor: 'green',
            // },
        },
        // expanderRow: {
        //     style: {
        //         color: 'black',
        //         backgroundColor: 'green',
        //     },
        // },
        // expanderCell: {
        //     style: {
        //         flex: '0 0 48px',
        //     },
        // },
        // expanderButton: {
        //     style: {
        //         color: 'black',
        //         fill: 'green',
        //         backgroundColor: 'transparent',
        //         borderRadius: '2px',
        //         transition: '0.25s',
        //         height: '100%',
        //         width: '100%',
        //         '&:hover:enabled': {
        //             cursor: 'pointer',
        //         },
        //         '&:disabled': {
        //             color: 'red',
        //         },
        //         '&:hover:not(:disabled)': {
        //             cursor: 'pointer',
        //             backgroundColor: 'green',
        //         },
        //         '&:focus': {
        //             outline: 'none',
        //             backgroundColor: 'red',
        //         },
        //         svg: {
        //             margin: 'auto',
        //         },
        //     },
        // },
        pagination: {
            style: {
                color: 'black',
                fontSize: '13px',
                minHeight: '56px',
                backgroundColor: 'Lightgray',
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: 'gray',
            },
            pageButtonsStyle: {
                borderRadius: '50%',
                height: '40px',
                width: '40px',
                padding: '8px',
                margin: 'px',
                cursor: 'pointer',
                transition: '0.4s',
                color: 'green',

                backgroundColor: 'transparent',
                '&:disabled': {
                    cursor: 'unset',
                    color: 'green',

                },
                '&:hover:not(:disabled)': {

                },
                '&:focus': {
                    outline: '1px solid green',

                },
            },
        },

        noData: {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'green',
                backgroundColor: 'red',
            },
        },
        progress: {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'green',
                backgroundColor: 'red',
            },
        },

     
    };


    //copy work 
    // const [copiedValue, setCopiedValue] = useState(null);

    // const handleCopyToClipboard = (value) => {
    //     copy(value);
    //   };

    return (
        <div className="border-2 ml-2 mr-3 mt-4">
            <div className="flex items-center justify-between my-4 mx-8">


                <div className="flex gap-4">
                    <CSVLink data={data} filename="table-data.csv" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">CSV</CSVLink>


                    <PDFDownloadLink document={<PdfDocument data={data} />} fileName="table-data.pdf" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'PDF'
                        }
                    </PDFDownloadLink>
                    {/* onClick={handleCopyToClipboard} */}
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Copy</button>

                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handlePrint}>Print</button>
                    {/*onClick={handleDownload}*/}
                    {/* <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleDownload} >Excle</button> */}

                    <CSVLink data={csvData} filename={'table-data.csv'}  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Excel
      </CSVLink>

                </div>
               <div className="">
                   <input type="text"  className="shadow appearance-none border rounded w-96 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={searchText} onChange={handleSearch} placeholder="Search..." />
               </div>
            </div>
           <div className='print-container'>
           <DataTable
                columns={columns}
                data={filteredData}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20]}
                defaultSortField="name"
             
               selectableRowsHighlight 
                highlightOnHover
                defaultSortAsc={true}
                title="Student List"
                customStyles={customStyles}
              
            />
           </div>
        </div>
    );
}

export default MyDataTable;
