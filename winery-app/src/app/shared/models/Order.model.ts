export interface Order {
  id: number,
  order_number: string,
  expected_delivery_date: string,
  time_placed: string,
  time_canceled: string,
  time_delivered: string,
  order_price: number
}