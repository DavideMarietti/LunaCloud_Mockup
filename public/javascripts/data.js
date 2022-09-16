// simulate catalog request
let catalog = [{
        obj: "table",
        name: "Branches",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048cb",
        created_by: "Roby",
        created_on: "00/00/0000",
        modified_by: "Max",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "11 columns",
        cells_rows: "82 rows",
        disk_space: "1.7MB",
        tags: "<span class='tag'>Geo</span>"
    },
    {
        obj: "table",
        name: "Buckets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id:"000048a4",
        created_by: "Roby",
        created_on: "00/00/0000",
        modified_by: "Max",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "2 columns",
        cells_rows: "11 rows",
        disk_space: "406KB",
        tags: "<span class='tag'>What If</span>"
    },
    {
        obj: "table",
        name: "Cities",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048b2",
        created_by: "Roby",
        created_on: "00/00/0000",
        modified_by: "Max",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "2 columns",
        cells_rows: "1942 rows",
        disk_space: "1.2MB",
        tags: "<span class='tag'>Geo</span>"
    },
    {
        obj: "table",
        name: "Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000488b",
        created_by: "Roby",
        created_on: "00/00/0000",
        modified_by: "Max",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "7 columns",
        cells_rows: "31 rows",
        disk_space: "1.2MB",
        tags: "<span class='tag'>Customers</span>"
    },
    {
        obj: "table",
        name: "Divisions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000489a",
        created_by: "Piero",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "4 columns",
        cells_rows: "9 rows",
        disk_space: "640KB",
        tags: "<span class='tag'>Products</span>"
    },
    {
        obj: "table",
        name: "Families",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000488c",
        created_by: "Piero",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "5 columns",
        cells_rows: "5 rows",
        disk_space: "664KB",
        tags: "<span class='tag'>Products</span>"
    },
    {
        obj: "table",
        name: "Funnel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048c0",
        created_by: "Piero",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "3 columns",
        cells_rows: "4 rows",
        disk_space: "504KB",
        tags: "<span class='tag'>Customers</span>"
    },
    {
        obj: "table",
        name: "Indicators",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048a6",
        created_by: "Piero",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "3 columns",
        cells_rows: "2 rows",
        disk_space: "434KB",
        tags: "<span class='tag'>What If</span>"
    },
    {
        obj: "table",
        name: "KPIs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048ab",
        created_by: "Piero",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Odd rows - Internal keys",
        cols_dims: "1 columns",
        cells_rows: "19 rows",
        disk_space: "741KB",
        tags: "<span class='tag'>What If</span>"
    },
    {
        obj: "table",
        name: "Measures",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000488d",
        created_by: "Max",
        created_on: "00/00/0000",
        modified_by: "Davide",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "8 columns",
        cells_rows: "13 rows",
        disk_space: "1.3MB",
        tags: "<span class='tag'>Budget</span>"
    },
    {
        obj: "table",
        name: "Months",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000488e",
        created_by: "Max",
        created_on: "00/00/0000",
        modified_by: "Davide",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "6 columns",
        cells_rows: "17 rows",
        disk_space: "1.1MB",
        tags: "<span class='tag'>Time</span>"
    },
    {
        obj: "table",
        name: "MultiType",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000492d",
        created_by: "Max",
        created_on: "00/00/0000",
        modified_by: "Davide",
        modified_on: "00/00/0000",
        type: "Odd rows - Internal keys",
        cols_dims: "1 columns",
        cells_rows: "4 rows",
        disk_space: "449KB",
        tags: "<span class='tag'>What If</span>"
    },
    {
        obj: "table",
        name: "PL_BS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048c9",
        created_by: "Max",
        created_on: "00/00/0000",
        modified_by: "Davide",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "6 columns",
        cells_rows: "37 rows",
        disk_space: "911KB",
        tags: "<span class='tag'>Budget</span>"
    },
    {
        obj: "table",
        name: "Products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000488a",
        created_by: "Max",
        created_on: "00/00/0000",
        modified_by: "Davide",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "5 columns",
        cells_rows: "252 rows",
        disk_space: "1.3MB",
        tags: "<span class='tag'>Products</span>"
    },
    {
        obj: "table",
        name: "Quarters",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000488f",
        created_by: "Max",
        created_on: "00/00/0000",
        modified_by: "Davide",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "5 columns",
        cells_rows: "4 rows",
        disk_space: "572KB",
        tags: "<span class='tag'>Time</span>"
    },
    {
        obj: "table",
        name: "Versions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "00004890",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "5 columns",
        cells_rows: "6 rows",
        disk_space: "573KB",
        tags: "<span class='tag'>What If</span>"
    },
    {
        obj: "table",
        name: "Years",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000489c",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Regular rows - Internal keys",
        cols_dims: "3 columns",
        cells_rows: "6 rows",
        disk_space: "512KB",
        tags: "<span class='tag'>Time</span>"
    },
    {
        obj: "cube",
        name: "Budget",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "00004891",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Dense - Float - Sum",
        cols_dims: "4 dims (252x16x17x6)",
        cells_rows: "411K cells",
        disk_space: "3.3MB",
        tags: "<span class='tag'>Budget</span><span class='tag'>Products</span><span class='tag'>Time</span>"
    },
    {
        obj: "cube",
        name: "Pipeline",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048c2",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Roby",
        modified_on: "00/00/0000",
        type: "Dense - Float - Sum",
        cols_dims: "5 dims (4x5x8x2x12)",
        cells_rows: "3840 cells",
        disk_space: "918KB",
        tags: "<span class='tag'>Customers</span><span class='tag'>Geo</span><span class='tag'>Time</span>"
    },
    {
        obj: "cube",
        name: "PL_BS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048cc",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Dense - Float - Sum",
        cols_dims: "5 dims (36x12x3x82x3)",
        cells_rows: "318K cells",
        disk_space: "7.7MB",
        tags: "<span class='tag'>Time</span><span class='tag'>What If</span>"
    },
    {
        obj: "cube",
        name: "Synt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "0000489d",
        created_by: "Roby",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Sparse - Float - Sum",
        cols_dims: "6 dims (5x9x17x2x5x3)",
        cells_rows: "45 cells",
        disk_space: "179KB",
        tags: "<span class='tag'>Products</span><span class='tag'>Time</span><span class='tag'>Geo</span>"
    },
    {
        obj: "cube",
        name: "US_demography",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048b3",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Odd - Various",
        cols_dims: "3 dims (1942x19x6)",
        cells_rows: "67K cells",
        disk_space: "1.3MB",
        tags: "<span class='tag'>Geo</span><span class='tag'>Time</span>"
    },
    {
        obj: "list",
        name: "Atlantic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048b6",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Selection - Cities",
        cols_dims: "",
        cells_rows: "",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "BS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048d1",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Selection - PL_BS",
        cols_dims: "",
        cells_rows: "",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "MapVersions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048e4",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Enumeration - Versions",
        cols_dims: "",
        cells_rows: "3 rows",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "MapYears",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048e3",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Enumeration - Years",
        cols_dims: "",
        cells_rows: "3 rows",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "North",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048b7",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Selection - Cities",
        cols_dims: "",
        cells_rows: "",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "Pacific",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048b8",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Selection - Cities",
        cols_dims: "",
        cells_rows: "",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "PL",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048d3",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Selection - PL_BS",
        cols_dims: "",
        cells_rows: "",
        disk_space: "",
        tags: ""
    },
    {
        obj: "list",
        name: "South",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ipsum non erat maximus ultricies non non nibh. Praesent sollicitudin a dolor vel mollis. Nulla at ligula ac lacus faucibus ornare. Aenean sed arcu nunc.",
        id: "000048b9",
        created_by: "Davide",
        created_on: "00/00/0000",
        modified_by: "Marco",
        modified_on: "00/00/0000",
        type: "Selection - Cities",
        cols_dims: "",
        cells_rows: "",
        disk_space: "",
        tags: ""
    }
];

// simulate macros tree
let macros_tree = [
    { text: "Import", class: "tree-folder-icon",items: [
            { text: "import_tables", class: "tree-macro-icon"},
            { text: "create_cubes", class: "tree-macro-icon"},
            { text: "import_data", class: "tree-macro-icon"}
        ] },
    { text: "Formulas", class: "tree-folder-icon", items: [
            { text: "apply_totals", class: "tree-macro-icon"},
            { text: "normalize", class: "tree-macro-icon"}
        ] },
    { text: "Reports", class: "tree-folder-icon", items: [
            { text: "report", class: "tree-macro-icon"},
            { text: "Sub", class: "tree-folder-icon", items: [
                    { text: "rep1", class: "tree-macro-icon"},
                    { text: "rep2", class: "tree-macro-icon"},
                    { text: "rep3", class: "tree-macro-icon"}
                ]}
        ] }
]
let macros = [
    {
        text: "import_tables",
        content: "// import all tables\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2014.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"ISIN\",\"4\")\n" +
            "    TableImportSepAddCol(\"Listing\",\"5\")\n" +
            "    TableImportSepAddCol(\"Incorporation\",\"6\")\n" +
            "TableImportSepEnd()\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2015.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"ISIN\",\"4\")\n" +
            "    TableImportSepAddCol(\"Listing\",\"5\")\n" +
            "    TableImportSepAddCol(\"Incorporation\",\"6\")\n" +
            "TableImportSepEnd()\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2016.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"ISIN\",\"4\")\n" +
            "    TableImportSepAddCol(\"Listing\",\"5\")\n" +
            "    TableImportSepAddCol(\"Incorporation\",\"6\")\n" +
            "TableImportSepEnd()\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2017.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"ISIN\",\"4\")\n" +
            "    TableImportSepAddCol(\"Listing\",\"5\")\n" +
            "    TableImportSepAddCol(\"Incorporation\",\"6\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2009.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2010.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2011.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2012.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2013.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2014.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2015.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2016.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n" +
            "\n" +
            "TableImportSepBegin(\"Companies\",\"D:\\Development\\Syrto\\IT2017.csv\",\",\",REPLACE,ADD_ROW,\"ID\",\"2\")\n" +
            "    SkipHeader()\n" +
            "    TableImportSepAddCol(\"NACE\",\"8\")\n" +
            "    TableImportSepAddCol(\"NACE_2\",\"8[1..2]\")\n" +
            "    TableImportSepLink(\"NACE_2\",\"Code\")\n" +
            "TableImportSepEnd()\n"
    },
    {
        text: "import_data",
        content: "// import cube\n" +
            "CubeImportSepBegin(\"Detail\",\"D:\\Development\\Syrto\\IT2009.csv\",\",\",REPLACE,LOG_TO_FILE)\n" +
            "    CubeImportSepColDim(\"Measures\")\n" +
            "    SkipHeader()\n" +
            "    CubeImportSepDim(\"Companies\",\"ID\",\"2\")\n" +
            "    CubeImportSepDim(\"Years\",\"Year\",\"9\")\n" +
            "    CubeImportSepData(\"FixedAssets\",\"11\")\n" +
            "    CubeImportSepData(\"CurrAssets\",\"12\")\n" +
            "    CubeImportSepData(\"Debtors\",\"13\")\n" +
            "    CubeImportSepData(\"Cash\",\"14\")\n" +
            "    CubeImportSepData(\"Capital\",\"15\")\n" +
            "    CubeImportSepData(\"LTdebt\",\"16\")\n" +
            "    CubeImportSepData(\"CurrLiab\",\"17\")\n" +
            "    CubeImportSepData(\"WorkingCap\",\"18\")\n" +
            "    CubeImportSepData(\"Turnover\",\"19\")\n" +
            "    CubeImportSepData(\"EBIT\",\"20\")\n" +
            "    CubeImportSepData(\"EBITDA\",\"21\")\n" +
            "    CubeImportSepData(\"CFturnover\",\"22\")\n" +
            "    CubeImportSepData(\"IntCover\",\"23\")\n" +
            "    CubeImportSepData(\"CurrRatio\",\"24\")\n" +
            "    CubeImportSepData(\"LiqRatio\",\"25\")\n" +
            "    CubeImportSepData(\"ROA1\",\"26\")\n" +
            "    CubeImportSepData(\"ROA2\",\"27\")\n" +
            "    CubeImportSepData(\"ROE1\",\"28\")\n" +
            "    CubeImportSepData(\"ROE2\",\"29\")\n" +
            "    CubeImportSepData(\"EBITDAfinexp\",\"30\")\n" +
            "    CubeImportSepData(\"interestcover\",\"31\")\n" +
            "    CubeImportSepData(\"status\",\"7\")\n" +
            "    CubeImportSepData(\"listing\",\"5\")\n" +
            "CubeImportSepEnd()\n"
    },
    {
        text: "report",
        content: "this$=This()\n" +
            "f_palette%=FALSE\n" +
            "\n" +
            "DrawPanelBegin(\"\",\"Call(\"\"Template\"\")\")\n" +
            "        \n" +
            "    menu_x#=170*wsc#\n" +
            "    menu_y#=610*hsc#\n" +
            "    menu_w#=690*wsc#\n" +
            "    menu_h#=30*hsc#\n" +
            "    menu_size#=25\n" +
            "    n_menu%=4\n" +
            "    menu_id$=\"\"\n" +
            "    menu_title$=\"\"\n" +
            "\n" +
            "    SetArray(\"menu_name$\",0,\"Simple\")\n" +
            "    SetArray(\"menu_code$\",0,\"cur_menu%=0\\nCall(this$)\")\n" +
            "\n" +
            "    SetArray(\"menu_name$\",1,\"Color coding\")\n" +
            "    SetArray(\"menu_code$\",1,\"cur_menu%=1\\nCall(this$)\")\n" +
            "\n" +
            "    SetArray(\"menu_name$\",2,\"Markers\")\n" +
            "    SetArray(\"menu_code$\",2,\"cur_menu%=2\\nCall(this$)\")\n" +
            "\n" +
            "    SetArray(\"menu_name$\",3,\"Data Entry\")\n" +
            "    SetArray(\"menu_code$\",3,\"cur_menu%=3\\nCall(this$)\")\n" +
            "\n" +
            "    Call(\"MenuBar\")    \n" +
            "    \n" +
            "    if cur_menu%=0 then\n" +
            "        Call(\"rep1\")\n" +
            "    elseif cur_menu%=1 then\n" +
            "        Call(\"rep2\")\n" +
            "    elseif cur_menu%=2 then\n" +
            "        Call(\"rep3\")\n" +
            "    elseif cur_menu%=3 then\n" +
            "        Call(\"rep4\")\n" +
            "    endif\n" +
            "\n" +
            "DrawPanelEnd(\"Panel\", \"Cross Tables\")\n" +
            "\n" +
            "\n"
    },
    {
        text: "rep1",
        content: "DrawReportBegin(\"Budget\",\"Brochure\",1)\n" +
            "    DrawSetExtraDim(\"Products\",\"\",\"Total\")\n" +
            "    DrawSetExtraDim(\"Months\",\"\",\"Total\")\n" +
            "        ListCreate(\"Measures\",ENUM)\n" +
            "        ListAddRow(\"Sales\")\n" +
            "    DrawReportRowDim(\"Measures\",\"[TEMP]\")\n" +
            "    DrawReportColumnDim(\"Versions\",\"\")\n" +
            "    DrawFont(\"Column\",\"Century Gothic\",FALSE,TRUE,FALSE,13)\n" +
            "    DrawReportColumn(\"L1\",177.8,\"\",\"\",\"\",0,\"CC2\")\n" +
            "    DrawReportColumn(\"C1\",160.24,\"Last Year\",\"\",\"\",0,\"CC2\")\n" +
            "    DrawReportColumn(\"C2\",160.24,\"Actual\",\"\",\"\",0,\"CC2\")\n" +
            "    DrawReportColumn(\"C3\",160.24,\"Budget\",\"\",\"\",0,\"CC2\")\n" +
            "    DrawReportColumn(\"C4\",160.24,\"Forecast\",\"\",\"\",0,\"CC2\")\n" +
            "    SetMargin(98*wsc#,65*hsc#,819*wsc#,142*hsc#,FALSE,PANEL)\n" +
            "    SetTransparent(EXT,TRUE)\n" +
            "    SetBackGround(255,255,255,PANEL)\n" +
            "DrawReportEnd()\n" +
            "DrawReportBegin(\"Budget\",\"Brochure\",1)\n" +
            "    DrawSetExtraDim(\"Products\",\"\",\"Total\")\n" +
            "    DrawSetExtraDim(\"Months\",\"\",\"Total\")\n" +
            "        ListCreate(\"Measures\",ENUM)\n" +
            "        ListAddRow(\"Units\")\n" +
            "    DrawReportRowDim(\"Measures\",\"[TEMP]\")\n" +
            "    DrawReportColumnDim(\"Versions\",\"\")\n" +
            "    DrawReportClearColumns(\"Versions\")\n" +
            "    DrawFont(\"Column\",\"Century Gothic\",FALSE,TRUE,FALSE,13)\n" +
            "    DrawReportColumn(\"L1\",178.24,\"\",\"\",\"\",0,\"CC3\",LEFT)\n" +
            "    DrawReportColumn(\"C1\",160.63,\"\",\"\",\"\",0,\"CC3\",CENTRE)\n" +
            "    DrawReportColumn(\"C2\",160.63,\"\",\"\",\"\",0,\"CC3\",CENTRE)\n" +
            "    DrawReportColumn(\"C3\",160.63,\"\",\"\",\"\",0,\"CC3\",CENTRE)\n" +
            "    DrawReportColumn(\"C4\",160.63,\"\",\"\",\"\",0,\"CC3\",CENTRE)\n" +
            "    SetMargin(97*wsc#,165*hsc#,821*wsc#,59*hsc#,FALSE,PANEL)\n" +
            "    SetTransparent(EXT,TRUE)\n" +
            "    SetBackGround(255,255,255,PANEL)\n" +
            "DrawReportEnd()\n" +
            "\n" +
            "DrawReportBegin(\"Budget\",\"Brochure\",11)\n" +
            "    DrawSetExtraDim(\"Products\",\"\",\"Total\")\n" +
            "    DrawSetExtraDim(\"Months\",\"\",\"Total\")\n" +
            "        ListCreate(\"Measures\",ENUM)\n" +
            "        ListAddRow(\"Cost of goods\")\n" +
            "        ListAddRow(\"- Materials\")\n" +
            "        ListAddRow(\"- Services\")\n" +
            "        ListAddRow(\"Gross margin\")\n" +
            "        ListAddRow(\"Gross margin %\")\n" +
            "        ListAddRow(\"Indirect costs\")\n" +
            "        ListAddRow(\"- Marketing&Sales\")\n" +
            "        ListAddRow(\"- General Costs\")\n" +
            "        ListAddRow(\"- ICT Costs\")\n" +
            "        ListAddRow(\"Contribution\")\n" +
            "        ListAddRow(\"Contribution %\")\n" +
            "    DrawReportRowDim(\"Measures\",\"[TEMP]\")\n" +
            "    DrawReportColumnDim(\"Versions\",\"\")\n" +
            "    DrawReportClearColumns(\"Versions\")\n" +
            "    DrawFont(\"Column\",\"Century Gothic\",FALSE,TRUE,FALSE,13)\n" +
            "    DrawReportColumn(\"L1\",178.45,\"\",\"\",\"\",0,\"CC1\",LEFT)\n" +
            "    DrawReportColumn(\"C1\",160.82,\"\",\"\",\"\",0,\"\",CENTRE)\n" +
            "    DrawReportColumn(\"C2\",160.82,\"\",\"\",\"\",0,\"CC1\",CENTRE)\n" +
            "    DrawReportColumn(\"C3\",160.82,\"\",\"\",\"\",0,\"\",CENTRE)\n" +
            "    DrawReportColumn(\"C4\",160.82,\"\",\"\",\"\",0,\"CC1\",CENTRE)\n" +
            "    SetMargin(98*wsc#,250*hsc#,822*wsc#,300*hsc#,FALSE,PANEL)\n" +
            "    SetTransparent(EXT,TRUE)\n" +
            "    SetBackGround(255,255,255,PANEL)\n" +
            "DrawReportEnd()\n"
    }
]
