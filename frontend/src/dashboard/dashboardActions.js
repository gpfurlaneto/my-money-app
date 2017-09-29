import axios from 'axios'

export function getSummary() {
    const request = axios.get(`${__API__}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

