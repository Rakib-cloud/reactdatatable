import React,{useState,useEffect} from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { ExportToCsv } from 'export-to-csv'; //or use your library of choice here
//import { data } from './makeData';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtabledata } from '../../Redux/Slice/gettableData';






// const data = [
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 2, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 3, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 4, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 5, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 6, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },
//     { id: 1, firstName: "John Doe",  lastName: "wilkinson",company:"dd",city:"dhaka",country:"bangladesh" },

   

   
//   ];

//defining columns outside of the component is fine, is stable
const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 40,
    },
    {
      accessorKey: 'name',
      header: 'name',
      size: 120,
    },
    {
      accessorKey: 'category_id.name',
      header: 'Category',
      size: 120,
    },
    {
     // accessorKey: 'formula_ingredients_list[0].formula_id.name',
     accessorFn: (row) => `${row.formula_ingredients_list?.map(f => f.formula_id.name)} `,
      header: 'Formula Name',
      size: 300,
    },
    {
      accessorFn: (row) => `${row.formula_ingredients_list?.map(f => f.raw_mat_id.name)} `,
      header: 'Rawmaterial Name',
    },
    {
      accessorFn: (row) => `${row.formula_ingredients_list?.map(f => f.no_of_unit)} `,
      header: 'NumberofUnit',
      size: 220,
    },

    {
      accessorFn: (row) => `${row.formula_ingredients_list?.map(f => f.percentage)} `,
      header: 'Percentage',
      size: 220,
    },
  ];
  
  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };
  
const csvExporter = new ExportToCsv(csvOptions);


const MuiTable = () => {



//get data 
  const [data, setData] = useState([]);

const getDetails = async () => {
  const res = await fetch("https://nafisa.selopian.us/product_formula", {
      method: "GET",
      headers: {
          // 'Authorization': `bearer ${adminToken}`
      }
  })
  const data = await res.json()
  console.log(data.data);
  setData(data.data)

  // if (res.status === 200) {
  //     console.log(data);
  //   //  setData(data.data)
  //    // console.log(details.logo)
  // }
}
useEffect(() => {
  getDetails();
}, []);

const data1 = useSelector(state=> state.data?.keys.data)
    console.log('dd',data1);


    const dispatch = useDispatch()
    useEffect(()=>{
      (dispatch(fetchtabledata()))
    },[dispatch])



    const handleExportRows = (rows) => {
        csvExporter.generateCsv(rows.map((row) => row.original));
      };
    
      const handleExportData = () => {
        csvExporter.generateCsv(data);
      };
//print function work
      const handlePrint = () => {
        window.print();
    };


    //pdf work 

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
          head: [[
            { content: 'id', styles: { halign: 'center' } },
            { content: 'firstName', styles: { halign: 'center' } },
            { content: 'LastName', styles: { halign: 'center' } },
            { content: 'Compnay', styles: { halign: 'center' } },
            { content: 'City', styles: { halign: 'center' } },
            { content: 'Country', styles: { halign: 'center' } },
          ]],
          body:
           data.map((item) => [item.id, item.firstName, item.lastName,item.company,item.city,item.country]),
          startY: 20,
          styles: {
            halign: 'center',
            valign: 'middle',
          },
        });
        doc.save('data.pdf');
      };


  return (
    <div     className='print-container'  id="my-table">
           <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      positionToolbarAlertBanner="bottom"
     
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
      
        >
          <Button
            color="primary"
            //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
            onClick={handleExportData}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Data
          </Button>
          {/* <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Rows
          </Button>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Page Rows
          </Button> */}
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Selected Rows
          </Button>

          <Button
           startIcon={<LocalPrintshopIcon />}
           variant="contained"
           onClick={handlePrint}
          >Print</Button>
 {/* onClick={generatePDF} */}
          <Button
           startIcon={<PictureAsPdfIcon />}
           variant="contained"
           onClick={generatePDF}
          >PDF</Button>

        </Box>
      )}
    />
    </div>
  )
}

export default MuiTable