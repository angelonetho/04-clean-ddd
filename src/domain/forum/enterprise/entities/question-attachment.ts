import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface QuestionAttachmentProps {
    questionId: UniqueEntityId
    attachmentId: UniqueEntityId
}

export class QuestionAttchment extends Entity<QuestionAttachmentProps> {
    get questionId() {
        return this.props.questionId
    }

    get attachmentId() {
        return this.props.attachmentId
    }

    static create(props: QuestionAttachmentProps, id?: UniqueEntityId) {
        const attatchment = new QuestionAttchment(props, id)

        return attatchment
    }
}