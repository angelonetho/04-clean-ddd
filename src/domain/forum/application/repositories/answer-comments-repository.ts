import { Answer } from '../../enterprise/entities/answer'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  create(answerComment: AnswerComment): Promise<void>
}
