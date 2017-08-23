module.exports = {

  getIndex(BillingCycle) {
    return (req, res) => {
      BillingCycle.findAll()
        .then(function (billingCycles) {
          res.status(200).json(billingCycles);
        })
        .catch(function (error) {
          res.status(500).json(error);
        })
      }
  },
}