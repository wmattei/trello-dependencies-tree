interface Window {
  TrelloPowerUp: {
    initialize: (
      functions: Record<string, any>,
      options?: Record<string, any>
    ) => void
    iframe: (options: any) => any
  }
}
