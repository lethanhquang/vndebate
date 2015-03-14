class Admin::UsersController < Admin::ApplicationController
  before_action :set_admin_user, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  # GET /admin/users
  # GET /admin/users.json
  def index
    @admin_users = User.paginate(page: params[:page], per_page: 30)
    respond_with(:admin, @admin_users)
  end

  # GET /admin/users/1
  # GET /admin/users/1.json
  def show
    respond_with(:admin, @admin_user)
  end

  # GET /admin/users/new
  def new
    @admin_user = User.new
    respond_with(:admin, @admin_user)
  end

  # GET /admin/users/1/edit
  def edit
  end

  # POST /admin/users
  # POST /admin/users.json
  def create
    @admin_user = User.new(admin_user_params)
    @admin_user.save
    respond_with(:admin, @admin_user)
  end

  # PATCH/PUT /admin/users/1
  # PATCH/PUT /admin/users/1.json
  def update
    @admin_user.update(admin_user_params)
    respond_with(:admin, @admin_user)
  end

  # DELETE /admin/users/1
  # DELETE /admin/users/1.json
  def destroy
    @admin_user.destroy
    respond_with(:admin, @admin_user)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_user
      @admin_user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_user_params
      params.require(:user).permit(:id,
                                 :email,
                                 :password,
                                 :name,
                                 :phone,
                                 :gender,
                                 :status,
                                 :register_step)

    end
end
