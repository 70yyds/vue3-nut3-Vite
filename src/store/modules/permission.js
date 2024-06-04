const useAppStore = defineStore(
  'permission',
  {
    state: () => ({
      routes: []
    }),
    actions: {
      setRouter(size) {
        this.size = size;
        Cookies.set('size', size)
      },
    }
  })

export default useAppStore
