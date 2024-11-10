export interface Order {
  id: number,
  order_number: string,
  expected_delivery_date: string,
  time_placed: string,
  time_canceled: string | null,
  time_delivered: string | null,
  order_price: number
}