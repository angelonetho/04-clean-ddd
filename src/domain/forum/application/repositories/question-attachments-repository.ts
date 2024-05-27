import { PaginationParams } from '@/core/repositories/pagination-params'

import { Answer } from '../../enterprise/entities/answer'
import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
  deleteManyByQuestionId(questionId: string): Promise<void>
}
