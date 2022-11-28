class Api::HelloController < ApplicationController
  def index
    render json: { id: 1, name: "リスト" } , status: :ok
  end
end
