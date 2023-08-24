export type CreateRecurringTreatment = {
  name: string
  dogId: number
  interval: number,
  intervalValue: number
  dateAdministered: Date
}