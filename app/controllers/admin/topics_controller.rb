class Admin::TopicsController < Admin::ApplicationController
  before_action :set_admin_topic, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  # GET /admin/topics
  # GET /admin/topics.json
  def index
    @admin_topics = Topic.paginate(page: params[:page], per_page: 30)
    respond_with(:admin, @admin_topics)
  end

  # GET /admin/topics/1
  # GET /admin/topics/1.json
  def show
    respond_with(:admin, @admin_topic)
  end

  # GET /admin/topics/new
  def new
    @admin_topic = Topic.new
    respond_with(:admin, @admin_topic)
  end

  # GET /admin/topics/1/edit
  def edit
  end

  # POST /admin/topics
  # POST /admin/topics.json
  def create
    @admin_topic = Topic.new(admin_topic_params)
    @admin_topic.save
    respond_with(:admin, @admin_topic)
  end

  # PATCH/PUT /admin/topics/1
  # PATCH/PUT /admin/topics/1.json
  def update
    @admin_topic.update(admin_topic_params)
    respond_with(:admin, @admin_topic)
  end

  # DELETE /admin/topics/1
  # DELETE /admin/topics/1.json
  def destroy
    @admin_topic.destroy
    respond_with(:admin, @admin_topic)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_topic
      @admin_topic = Topic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_topic_params
      params.require(:topic).permit(:id,
                                 :email,
                                 :password,
                                 :name,
                                 :phone,
                                 :gender,
                                 :status,
                                 :register_step)

    end
end
