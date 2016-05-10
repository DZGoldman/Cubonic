class PuzzlesController < ApplicationController

  #Custom path:
  #Get the main puzzles- these are set apart because they are created by the admin, DZack. DZack can add notes to puzzles, so they are sorted by the notes, which end with the level numebr
  def levels

       @records= User.find_by(user_name:"DZack").puzzles
       @puzzles = []

       @records.each do |puzzle|
         @puzzles.push(puzzle)
       end
       len =@puzzles.length
       found = true
       puts 'start'
       while found
         found = false
        #  puts @puzzles[0].notes
         @puzzles.each_with_index do |puzzle, i|
           break if i == len-1

           puzzle_num = puzzle.notes.split(' ')[1].to_i
           next_puzzle_num = @puzzles[i+1].notes.split(' ')[1].to_i
           if puzzle_num > next_puzzle_num
             found=true
            #  puts 'pre:'
            # puts @puzzles.map{|p| p.notes.split(' ')[1].to_i }
            #  print puzzle_num, ' ', next_puzzle_num
            #  puts ''
            #  puts 'post:'
            # puts @puzzles.class
             @puzzles[i], @puzzles[i+1] = @puzzles[i+1], @puzzles[i]
            #  puts @puzzles.map{|p| p.notes.split(' ')[1].to_i }
            #  puts ''
           end
         end
       end
      # instead of all puzzles, only puzzles by DZack (admin)
      puts 'done'
        puts @puzzles
       @puzzles
  end

  def index
    @puzzles= Puzzle.all
  end

  def show
      @puzzle= Puzzle.find(params[:id])
  end

  def edit
    redirect_to '/login' unless logged_in?
    @puzzle=Puzzle.find(params[:id])
    redirect_to logout_path unless current_user.id == @puzzle.user_id
  end

  def update
    @puzzle= Puzzle.find(params[:id])
    @puzzle.update(puzzle_params)
    @puzzle.user_id=current_user.id
        flash[:notice] = "You've updated this puzzle. Nice."
    redirect_to puzzle_path(@puzzle)


  end

  def new
    redirect_to '/login' unless logged_in?
    @puzzle=Puzzle.new
  end

  def create
    @puzzle= Puzzle.new puzzle_params

    @puzzle.user_id = current_user.id
    #@puzzle.clicks_created= 3
    @puzzle.save
    flash[:notice] = "You made a new puzzle. Good."
    redirect_to puzzle_path(@puzzle)
  end

  # Custom path:
  #find all wins of a given user
  def win
      redirect_to '/login' unless logged_in?
      @puzzle= Puzzle.find(params[:id])
      user_id = current_user.id
      #figure out of the win should count:
      count_win = true
      @wins= Win.all
      @wins.each_with_index do |win|
        #if user has already beaten this puzzle,
        if win.user_id==user_id
          if win.puzzle_id==@puzzle.id
            #don't count it
            count_win=false
            break
          end
        end
      end
      #if it survived the loop, generate new Win object, gives it appropriate puzzle and user id
      if count_win
        @win= Win.new
        @win.user_id=current_user.id
        @win.puzzle_id=@puzzle.id
        #@win.clicks?
        @win.save
        # @puzzle.best_solution < @win.clicks
        #check to see if the clicks it took to win is the best solution; if so, update best solution
        # @puzzle.best_solution=@win.clicks
        @puzzle.best_solver=current_user.user_name
        @puzzle.save
      end

      if @puzzle.user_id ==1 && @puzzle.id != 10
        #NOTE redirect to next puzzle instead?
        next_puzzle = Puzzle.find((params[:id].to_i+1).to_s)
        redirect_to puzzle_path(next_puzzle)
      else
        redirect_to user_path(current_user)
      end

  end

  def destroy
    @puzzle=Puzzle.find(params[:id])
     @win=Win.where(puzzle_id: @puzzle.id)
     unless @win==[]
       @win.each do |win|
         Win.delete(win.id)
       end
     end
    @puzzle.delete
    flash.now[:success] = "You deleted this puzzle. Cool."

    redirect_to puzzles_path
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:notes, :pattern, :clicks_created)
  end
end
