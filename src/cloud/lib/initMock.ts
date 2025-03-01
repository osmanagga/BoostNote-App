import { initMockData } from '../api/mock/db/init'

if (process.env.MOCK_BACKEND === 'true') {
  initMockData()
}
