import * as z from 'zod'
import { StatusSchema } from '../favorites/all_fav'

// 点赞列表的响应结构与收藏类似
const LikeListSchema = z.object({
  list: z.array(StatusSchema),
  total_number: z.number().optional(),
})

export type RawLikeList = z.infer<typeof LikeListSchema>
export type RawLike = z.infer<typeof StatusSchema>
