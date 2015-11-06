class PuzzlesController < ApplicationController
  def index
    @puzzles= Puzzle.all
  end

  def show
      @puzzle= Puzzle.find(params[:id])
  end

  def edit
  end

  def new
    @puzzle=Puzzle.new
  end

  def create
    @puzzle= Puzzle.new puzzle_params
    @puzzle.user_id = current_user.id
    @puzzle.save
    redirect_to puzzle_path(@puzzle)
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:notes)
  end
end
