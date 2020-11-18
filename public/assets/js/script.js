$(document).ready(() => {

   function displayStocks(stockName, priceId, changepriceId) {

      $.ajax({
         url: "/api/stocks/" + stockName,
         method: "GET"
      })
         .then((data) => {
            $("#" + priceId).html("$" + data.latestPrice);
            $("#" + changepriceId).html((data.changePercent*100).toFixed(2) + "%");
         });

   }

   displayStocks("IBM", "priceIBM", "changepercentageIBM");
   displayStocks("TSLA", "priceTesla", "changepercentageTesla");
   displayStocks("BIIB", "priceBiogen", "changepercentageBiogen");



   $("#add4").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      // const stockId = $(this).children(".stock_id").val();
      // console.log(stockId);
      // $.ajax({
      //    method: "PUT",
      //    url: "/portfolio/" + stockId
      // }).then((data) => {
      //    console.log(data);
      window.location.replace("/portfolio");
      // });
   });

   // $(".detailBtn").on("click", (event) => {
   //    event.preventDefault();
   //    console.log("I was clicked!!!");
   //    // const stockId = $(this).children(".stock_id").val();
   //    // console.log(stockId);
   //    // $.ajax({
   //    //    method: "PUT",
   //    //    url: "/portfolio/" + stockId
   //    // }).then((data) => {
   //    //    console.log(data);
   //    window.location.replace("/IBMdetails");
   //    // });
   // });



   //New feature: save API data as a sequelize object - not working
   // $("#add1").on("click", () => {
   //    var stock = {
   //       name: 
   //    }
   // });

   // app.post("/api/stock_data", (req, res) => {
   //    console.log(req.body);
   //    db.Stock.create({
   //       name: data.companyName,
   //       price: data.iexRealtimePrice
   //    })
   //       .then((dbStock) => {
   //          res.json(dbStock);
   //       });
   // });
   // // console.log(data.changePercent);
   // console.log("done done done!");

   $("#add1").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      // const stockId = $(this).children(".stock_id").val();
      // console.log(stockId);
      $.ajax({
         method: "GET",
         url: "/api/stocks"
      }).then((data) => {
         console.log(data);
      // window.location.replace("/portfolio");
      });
   });
   

   $("#post1").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      // const stockId = $(this).children(".stock_id").val();
      // console.log(stockId);
      const newStock = {
         name: "IBMYYYY!",
         symbol: "IBM",
         price: 100,
         changePercent: 0.2
      };
      // submitStock(newStock)


      $.post("/api/stocks", newStock, () => {
         console.log(newStock);
      });

   });

});