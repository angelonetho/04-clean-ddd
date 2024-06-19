import { DomainEvents } from "@/core/events/domain-events";
import { EventHandler } from "@/core/events/event-handler";
import { AnswerCreatedEvent } from "@/domain/forum/enterprise/events/answer-created-event";
import { SendNotificationUseCase } from "../use-case/send-notification";
import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository";
import { QuestionBestAnswerChosenEvent } from "@/domain/forum/enterprise/events/question-best-answer-chosen-event";

export class OnQuestionBestAnswerChosen implements EventHandler {
    constructor(
        private answersRepository: AnswersRepository,
        private sendNotification: SendNotificationUseCase,
    ) {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(this.sendQuestionBestAnswerChosenNotification.bind(this), QuestionBestAnswerChosenEvent.name)
    }

    private async sendQuestionBestAnswerChosenNotification({ question, bestAnswerId }: QuestionBestAnswerChosenEvent) {
        const answer = await this.answersRepository.findById(bestAnswerId.toValue())


        if(answer) {
            await this.sendNotification.execute({
                recipientId: answer.authorId.toString(),
                title: `Sua resposta foi escolhida!`,
                content: `A resposta que você enviou em "${question.title.substring(0, 20).concat('...')}" foi escolhida pelo autor!`
            })
        }

        
    }

    
}