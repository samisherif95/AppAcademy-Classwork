require 'byebug'
module Searchable
    def dfs(target) 
        return self if self.value == target
        self.children.each do |child|
            result = child.dfs(target)
            return result if !result.nil?
        end
        nil
    end

    def bfs(target)
        #debugger
        queue = [self] 
        until queue.empty?
            dequeue = queue.shift
            return dequeue if dequeue.value == target
            queue.concat(dequeue.children)
            #queue += dequeue.children
        end
        nil
    end

end

class PolyTreeNode
    include Searchable
    attr_reader :value, :parent, :children
    def initialize(value = nil)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)
        if self.parent == new_parent
            return self
        end

        if self.parent
            self.parent.children.delete(self) # deletes our self queue fromm our old parent children array
        end

        @parent = new_parent 

        unless self.parent.nil?
            self.parent.children << self # adds our self queue to new parent children array
        end 

        self
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node) 
        if !self.children.include?(child_node)
            raise "Child queue not found in children array"
        else
            child_node.parent = nil
        end
    end

end

