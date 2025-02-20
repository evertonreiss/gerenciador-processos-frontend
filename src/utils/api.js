import { notify } from 'src/utils/notify-utils';


const useReadOnlyApi = (api) => {

  return {

    async list(params) {
        try {
          const { data } = await api.get(this.resource, { params })
          if(!data) {
            notify.info('Nenhum registro encontrado')
          }
          return data
        } catch (e) {
          e?.response?.data?.errors.forEach(error => notify.error(error))
        }
        return null
      },

    async get(id, config) {
      try {
        const { data } = await api.get(`${this.resource}/${id}`, config)
        return data
      } catch (e) {
        e?.response?.data?.errors.forEach(error => notify.error(error))
      }
      return null
    }

  }
}

const useCrudApi = (api) => {
  return {
    ...useReadOnlyApi(api),

    async save(data, id, config) {
      try {
        if(!id) {
          return await api.post(this.resource, data, config)
        }

        if(data instanceof FormData) {
          data.append('_method', 'PUT')
          return await api.post(`${this.resource}/${id}`, data, config)
        }

        return await api.put(`${this.resource}/${id}`, data, config)

      } catch (e) {
        e?.response?.data?.errors.forEach(error => notify.error(error))
      }
      return null
    },

    async post(data, config) {
      try {
        return await api.post(`${this.resource}`, data, config)
      } catch (e) {
        e?.response?.data?.errors.forEach(error => notify.error(error))
      }
      return null
    },

    async delete(id) {
      try {
        await api.delete(`${this.resource}/${id}`)
      } catch (e) {
        e?.response?.data?.errors.forEach(error => notify.error(error))
      }
    }
  }
}

export {
  useReadOnlyApi,
  useCrudApi,
}
