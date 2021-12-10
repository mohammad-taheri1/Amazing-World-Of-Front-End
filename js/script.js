const searchInput = document.querySelector("#search");

const products = [
    {id: 1, title: "new producsf sgsg dsgasdgds fgdsfG"},
    {id: 2, title: "SADFJK SDAGNDSJ WEP 5DGSA"},
    {id: 3, title: "DDSFA EEW FHS SFGAS "},
    {id: 4, title: "ASDF RGRL  'RTOPJRWOIGERWO"},
    {id: 5, title: "DFAS L;GIO JRNGUPOAS"},
    {id: 6, title: "LOIEWUB IWRHGUISDLV;"},
    {id: 7, title: "DSALKFJB OIWRGIB./ KLRGNU KJAFNUODVI "},
    {id: 8, title: "LSJDF URGUIRG URGPFO OEWIIFH; UD GF"},
    {id: 9, title: "DSLKF KEWGFOI UIREGUI OF;DVDS5"},
    {id: 10, title: "DS DVC FE FIOOI RJGNRUI "},
];

const filterString={
    searchItem : '',
}

function renderProducts(products, filterString){
    const result = products.filter(q => q.title.toLowerCase().includes(filterString.searchItem.toLowerCase()));
    console.log(result);
}



searchInput.addEventListener("input", (e) => {
     filterString.searchItem = e.target.value;
     renderProducts(products, filterString);
})