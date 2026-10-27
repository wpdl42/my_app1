import { model, models, Schema } from "mongoose"

const noticeSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    //author: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    authorName: { type: String, required: true, trim: true },
  },
  { timestamps: true },
)

export const Notice = models.Notice || model("Notice", noticeSchema)
// export로 다른 파일에서도 Notice 사용 할 수 있도록 만듦
