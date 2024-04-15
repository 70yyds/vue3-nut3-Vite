const useAppStore = defineStore(
  'permission',
  {
    state: () => ({

    }),
    actions: {
      setRouter(size) {
        this.size = size;
        Cookies.set('size', size)
      },
    }
  })

export default useAppStore
