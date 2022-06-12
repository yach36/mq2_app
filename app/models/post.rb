class Post < ApplicationRecord
  validates :txt, :track_id, presence: true
  
  # 投稿作成日時の書式設定
  def redefine_date_format
    # 投稿作成日時
    self_datetime = self.created_at
    # 投稿日
    self_date = Date.parse(self_datetime.strftime("%Y/%m/%d"))
    today = Date.today #今日
    yesterday = Date.yesterday #昨日
    if self_datetime.today?
      return "今日"
    elsif self_date == yesterday
      return "昨日"
    else
      # 昨日以前
      return self_datetime.strftime("%Y/%m/%d")
    end
  end
end
