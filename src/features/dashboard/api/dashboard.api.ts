import apiClient from '#/api/clients.ts'
import type { Dashboard } from '#/features/dashboard/api/dashboard.types.ts'

export async function getOverview(): Promise<Dashboard> {
  return await apiClient.get('subscriptions/overview').json<Dashboard>()
}
