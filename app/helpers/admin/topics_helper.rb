module Admin::TopicsHelper
  LABEL_STATUS = {
    'pending'   =>  'label-default',
    'published' =>  'label-success',
    'rejected'  =>  'label-danger'
  }

  def render_label_topic_status(status)
    "<span class='label #{LABEL_STATUS[status]}'>#{status}</span>".html_safe
  end
end
